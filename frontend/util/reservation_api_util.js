export const fetchReservations = () =>
  $.ajax({
    method: "get",
    url: `/api/reservations/`,
  });

export const fetchReservation = (reservationId) =>
  $.ajax({
    method: "get",
    url: `/api/reservations/${reservationId}`,
  });

export const createReservation = (reservation) =>
  $.ajax({
    method: "post",
    url: `/api/reservations`,
    data: { reservation },
  });

export const updateReservation = (reservation) =>
    $.ajax({
      method: "patch",
      url: `/api/reservations/${reservation.id}`,
      data: {reservation}
    });

export const deleteReservation = (reservationId) =>
  $.ajax({
    method: "delete",
    url: `/api/reservations/${reservationId}`,
  });
