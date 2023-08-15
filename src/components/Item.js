// import React, { Component } from "react";

// export class Item extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//     return (
//       <div className="my-2">
//         <div className="card">
//            <div style={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             position: 'absolute',
//             right: '0'
//           }
//           }>
//             <span className="bg-danger"> {source} </span>
//              image is null then show this image otherwise normal image show thai
//              <img
//                src={
//                  !imageUrl
//                    ? "https://www.healio.com/~/media/slack-news/gastroenterology/misc/awareness-images/2022/22005939_0622_hepatitisday.jpg"
//                    : imageUrl
//                }
//                className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">{title}...</h5>
//               <p className="card-text">{description}...</p>
//               <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
//               <a
//                 href={newsUrl}
//                 rel="noreferrer"
//                 target="_blank"
//                 className="btn btn-sm btn-dark"
//               >
//                 Read More
//               </a>
//              </div>
//            </div>
//          </div>
//        </div>
//     )
//   }
// }
// export default Item


 import React from 'react'

 const Item = (props)=> { 
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3 mx-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://www.healio.com/~/media/slack-news/gastroenterology/misc/awareness-images/2022/22005939_0622_hepatitisday.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
 
}

 export default Item 
