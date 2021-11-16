// import React, { useState, useEffect } from 'react';
// import {Link} from "react-router-dom";


// function Search(props){
    
//     useEffect(() => {
//         props.fetchListings()
//     }, [])

//          const { listings, placeholder } = props;
//          const [filteredData, setFilteredData] = useState([]);
//          const [wordEntered, setWordEntered] = useState("");
//          const array = [];
//          const newArray = [];
//          const handleFilter = (e) => {
//              const searchWord = e.target.value;
//              setWordEntered(searchWord)
//              const newFilter = listings.filter((listing) => {
//                  return listing.city.toLowerCase().includes(searchWord.toLowerCase());
//              });
//              if (searchWord === ""){
//                 setFilteredData([]);
//              }else{
//                 setFilteredData(newFilter);
//              }
//          };
//          const clearInput = () => {
//              setFilteredData([]);
//              setWordEntered("");
//          }
//         return (
//           <div className="guest-booking">
//             <div className="filter-city">
//               <div className="searchInputs">
//                 <input
//                   type="text"
//                   value={wordEntered}
//                   placeholder={placeholder}
//                   onChange={handleFilter}
//                 />
//                 <div className="searchIcon">
//                   {filteredData.length === 0 ? (
//                     <i className="fas fa-search"></i>
//                   ) : (
//                     <i
//                       className="fas fa-times"
//                       id="clearBtn"
//                       onClick={clearInput}
//                     ></i>
//                   )}
//                 </div>
//               </div>
//               {filteredData.length !== 0 && (
//                 <div className="dataResult">
//                   {filteredData.forEach((filteredItem) => {
//                     array.push(filteredItem.city);
//                   })}
//                   {[...new Set(array)].map((uniqueCity, i) => {
//                     return (
//                       <Link
//                         // target="_blank"
//                         className="dataItem"
//                         to={`/${uniqueCity}`}
//                         key={i}
//                       >
//                         <p>{uniqueCity}</p>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//             <div className="check-in">
//               <ul className="describe">
//                 <li className="header">Check in</li>
//                 <li className="detail">Add dates</li>
//               </ul>
//             </div>
//             <div className="line">
//               <span className="divider"></span>
//             </div>
//             <div className="check-out">
//               <ul className="describe">
//                 <li className="header">Check out</li>
//                 <li className="detail">Add dates</li>
//               </ul>
//             </div>
//             <div className="line">
//               <span className="divider"></span>
//             </div>
//             <div className="guests">
//               <ul className="describe">
//                 <li className="header">Guests</li>
//                 <li className="detail">Add guests</li>
//               </ul>
//               <div className="search">
//                 <i className="fas fa-search" id="search-icon"></i>
//               </div>
//             </div>
//           </div>
//         );
// }

// export default Search; 


