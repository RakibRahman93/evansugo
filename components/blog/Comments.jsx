import React from "react";
import Image from "next/image";
const comments = [
  {
    author: "John Doe",
    date: "Feb 9, 2023 at 10:23",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.",
    avatar: "/assets/images/user-avatar.png",
    replies: [
      {
        author: "Sam Brin",
        date: "Feb 9, 2023 at 10:27",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.",
        avatar: "/assets/images/user-avatar.png",
      },
    ],
  },
  {
    author: "Emma Johnson",
    date: "Feb 9, 2023 at 10:37",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.",
    avatar: "/assets/images/user-avatar.png",
    replies: [],
  },
  {
    author: "John Doe",
    date: "Feb 9, 2023 at 10:3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.",
    avatar: "/assets/images/user-avatar.png",
    replies: [],
  },
];

export default function Comments() {
  return (
    <>
      {comments.map((comment, i) => (
        <li key={i} className="media comment-item">
          <a className="float-start" href="#">
            <Image
              className="media-object comment-avatar"
              src={comment.avatar}
              alt=""
              width={50}
              height={50}
            />
          </a>
          <div className="media-body">
            <div className="comment-item-data">
              <div className="comment-author">
                <a href="#">{comment.author}</a>
              </div>
              {comment.date} <span className="separator">—</span>
              <a href="#">
                <i className="fa fa-comment" />
                &nbsp;Reply
              </a>
            </div>
            <p>{comment.text}</p>
            {comment.replies &&
              comment.replies.length > 0 &&
              comment.replies.map((reply, index) => (
                <div key={index} className="media comment-item">
                  <a className="float-start" href="#">
                    <Image
                      className="media-object comment-avatar"
                      src={reply.avatar}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </a>
                  <div className="media-body">
                    <div className="comment-item-data">
                      <div className="comment-author">
                        <a href="#">{reply.author}</a>
                      </div>
                      {reply.date} <span className="separator">—</span>
                      <a href="#">
                        <i className="fa fa-comment" />
                        &nbsp;Reply
                      </a>
                    </div>
                    <p>{reply.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </li>
      ))}
    </>
  );
}
