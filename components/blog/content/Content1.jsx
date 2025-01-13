import React from "react";
import Slider4 from "../sliders/Slider4";
import Image from "next/image";
import Link from "next/link";
export default function Content1() {
  return (
    <>
      {/* Post */}
      <div className="blog-item box-shadow round p-4 p-md-5">
        {/* Post Title */}
        <h2 className="blog-item-title">
          <Link href={`/main-blog-single-sidebar-right/${1}`}>
            Blog post with media gallery
          </Link>
        </h2>
        {/* Author, Categories, Comments */}
        <div className="blog-item-data">
          <a href="#">
            <i className="mi-clock size-16" /> December 25
          </a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-user size-16" /> John Doe
          </a>
          <span className="separator">&nbsp;</span>
          <i className="mi-folder size-16" />
          <a href="#">Design</a>, <a href="#">Branding</a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-message size-16" /> 5 Comments
          </a>
        </div>
        {/* Media Gallery */}
        <div className="blog-media">
          <Slider4 />
        </div>
        {/* Text Intro */}
        <div className="mb-30">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            laoreet dui. Morbi lacus massa, euismod ut turpis molestie, aliquam
            in ligula ac lacus blandit commodo vel luctus quam. tristique
            sodales est. Integer sit amet mi id sapien tempor molestie in nec
            massa.
          </p>
        </div>
        {/* Read More Link */}
        <div className="blog-item-foot">
          <Link
            href={`/main-blog-single-sidebar-right/${1}`}
            className="btn btn-mod btn-round btn-medium btn-gray"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* End Post */}
      {/* Post */}
      <div className="blog-item box-shadow round p-4 p-md-5">
        {/* Post Title */}
        <h2 className="blog-item-title">
          <Link href={`/main-blog-single-sidebar-right/${2}`}>
            Blog post with blockquote
          </Link>
        </h2>
        {/* Author, Categories, Comments */}
        <div className="blog-item-data">
          <a href="#">
            <i className="mi-clock size-16" /> December 25
          </a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-user size-16" /> John Doe
          </a>
          <span className="separator">&nbsp;</span>
          <i className="mi-folder size-16" />
          <a href="#">Design</a>, <a href="#">Branding</a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-message size-16" /> 5 Comments
          </a>
        </div>
        {/* Blockquote */}
        <blockquote className="blog-item-q mb-30">
          <p className="mb-0">
            <Link href={`/main-blog-single-sidebar-right/${1}`}>
              Curabitur iaculis, ligula facilisis volutpat suscipit, sapien
              felis tempor, consequat vitae velit.
            </Link>
          </p>
        </blockquote>
        {/* End Blockquote */}
        {/* Read More Link */}
        <div className="blog-item-foot">
          <Link
            href={`/main-blog-single-sidebar-right/${1}`}
            className="btn btn-mod btn-round btn-medium btn-gray"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* End Post */}
      {/* Post */}
      <div className="blog-item box-shadow round p-4 p-md-5">
        {/* Post Title */}
        <h2 className="blog-item-title">
          <Link href={`/main-blog-single-sidebar-right/${1}`}>
            Blog post with video
          </Link>
        </h2>
        {/* Author, Categories, Comments */}
        <div className="blog-item-data">
          <a href="#">
            <i className="mi-clock size-16" /> December 25
          </a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-user size-16" /> John Doe
          </a>
          <span className="separator">&nbsp;</span>
          <i className="mi-folder size-16" />
          <a href="#">Design</a>, <a href="#">Branding</a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-message size-16" /> 5 Comments
          </a>
        </div>
        {/* Media Gallery */}
        <div className="blog-media">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/jTea_8Fk5Ns"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
        </div>
        {/* Text Intro */}
        <div className="mb-30">
          <p className="mb-0">
            Morbi lacus massa, euismod ut turpis molestie, tristique sodales
            est. Integer sit amet mi id sapien tempor molestie in nec massa.
          </p>
        </div>
        {/* Read More Link */}
        <div className="blog-item-foot">
          <Link
            href={`/main-blog-single-sidebar-right/${1}`}
            className="btn btn-mod btn-round btn-medium btn-gray"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* End Post */}
      {/* Post */}
      <div className="blog-item box-shadow round p-4 p-md-5">
        {/* Post Title */}
        <h2 className="blog-item-title">
          <Link href={`/main-blog-single-sidebar-right/${1}`}>
            Blog post with text
          </Link>
        </h2>
        {/* Author, Categories, Comments */}
        <div className="blog-item-data">
          <a href="#">
            <i className="mi-clock size-16" /> December 25
          </a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-user size-16" /> John Doe
          </a>
          <span className="separator">&nbsp;</span>
          <i className="mi-folder size-16" />
          <a href="#">Design</a>, <a href="#">Branding</a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-message size-16" /> 5 Comments
          </a>
        </div>
        {/* Text Intro */}
        <div className="mb-30">
          <p className="mb-0">
            Suspendisse accumsan interdum tellus, eu imperdiet lacus consectetur
            sed. Aliquam in ligula ac lacus blandit commodo vel luctus quam.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Cras eu ultrices mauris.
          </p>
        </div>
        {/* Read More Link */}
        <div className="blog-item-foot">
          <Link
            href={`/main-blog-single-sidebar-right/${1}`}
            className="btn btn-mod btn-round btn-medium btn-gray"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* End Post */}
      {/* Post */}
      <div className="blog-item box-shadow round p-4 p-md-5">
        {/* Post Title */}
        <h2 className="blog-item-title">
          <Link href={`/main-blog-single-sidebar-right/${1}`}>
            Blog post with image
          </Link>
        </h2>
        {/* Author, Categories, Comments */}
        <div className="blog-item-data">
          <a href="#">
            <i className="mi-clock size-16" /> December 25
          </a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-user size-16" /> John Doe
          </a>
          <span className="separator">&nbsp;</span>
          <i className="mi-folder size-16" />
          <a href="#">Design</a>, <a href="#">Branding</a>
          <span className="separator">&nbsp;</span>
          <a href="#">
            <i className="mi-message size-16" /> 5 Comments
          </a>
        </div>
        {/* Image */}
        <div className="blog-media">
          <Link href={`/main-blog-single-sidebar-right/${1}`}>
            <Image
              src="/assets/images/portfolio/full-project-4.jpg"
              width={1350}
              height={865}
              alt=""
            />
          </Link>
        </div>
        {/* Text Intro */}
        <div className="mb-30">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            magna ut ante eleifend eleifend. Aliquam ac libero et diam rutrum
            rutrum. Nullam interdum mattis ipsum at convallis.
          </p>
        </div>
        {/* Read More Link */}
        <div className="blog-item-foot">
          <Link
            href={`/main-blog-single-sidebar-right/${1}`}
            className="btn btn-mod btn-round btn-medium btn-gray"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
