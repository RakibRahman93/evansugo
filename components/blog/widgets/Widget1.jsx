"use client";
import { archiveLinks } from "@/data/archeve";
import { widgetPosts } from "@/data/blogs";
import { categories } from "@/data/categories";
import { comments } from "@/data/comments";
import { tags } from "@/data/tags";
import Image from "next/image";
import React from "react";

export default function Widget1({
  searchInputClass = "form-control input-md search-field input-circle",
}) {
  return (
    <>
      <div className="widget">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <div className="search-wrap">
            <button
              className="search-button animate"
              type="submit"
              title="Start Search"
            >
              <i className="mi-search size-18" />
              <span className="visually-hidden">Start search</span>
            </button>
            <input
              type="text"
              className={searchInputClass}
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      {/* End Search Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Categories</h3>
        <div className="widget-body">
          <ul className="clearlist widget-menu">
            {categories.map((category) => (
              <li key={category.id}>
                <a href="#" title="">
                  {category.name}
                </a>
                <small> - {category.count} </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Tags</h3>
        <div className="widget-body">
          <div className="tags">
            {tags.map((tag) => (
              <a href="#" key={tag.id}>
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* End Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Latest posts</h3>
        <div className="widget-body">
          <ul className="clearlist widget-posts">
            {widgetPosts.map((post, index) => (
              <li key={index} className="clearfix">
                <a href="#">
                  <Image
                    src={post.imgUrl}
                    height={140}
                    style={{ height: "fit-content" }}
                    alt=""
                    width={100}
                    className="widget-posts-img"
                  />
                </a>
                <div className="widget-posts-descr">
                  <a href="#" title="">
                    {post.title}
                  </a>
                  <span>Posted by {post.author}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Comments</h3>
        <div className="widget-body">
          <ul className="clearlist widget-comments">
            {comments.map((comment, index) => (
              <li key={index}>
                {comment.author} on{" "}
                <a href="#" title="">
                  {comment.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Text widget</h3>
        <div className="widget-body">
          <div className="widget-text clearfix">
            <Image
              src="/assets/images/blog/previews/post-prev-6.jpg"
              height={140}
              alt="Image Description"
              style={{ height: "fit-content" }}
              width={100}
              className="left img-left"
            />
            Consectetur adipiscing elit. Quisque magna ante eleifend eleifend.
            Purus ut dignissim consectetur, nulla erat ultrices purus, ut
            consequat sem elit non sem. Quisque magna ante eleifend eleifend.
          </div>
        </div>
      </div>
      {/* End Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Archive</h3>
        <div className="widget-body">
          <ul className="clearlist widget-menu">
            {archiveLinks.map((link) => (
              <li key={link.id}>
                <a href="#" title="">
                  {link.date}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
