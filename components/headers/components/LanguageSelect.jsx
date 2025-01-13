import React, { useState, useRef } from "react";

export default function LanguageSelect() {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selecting a language
  };

  return (
    <li className="languageSelect">
      <a
        href="#"
        className="mn-has-sub opacity-1"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        {selectedLanguage} <i className="mi-chevron-down" />
      </a>

      {/* Dropdown menu with sliding effect */}
      <ul
        className={`mn-sub to-left ${isDropdownOpen ? "open" : "closed"}`}
        ref={dropdownRef}
      >
        <li>
          <a href="#" onClick={() => handleLanguageSelect("En")}>
            English
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLanguageSelect("Fr")}>
            French
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLanguageSelect("De")}>
            German
          </a>
        </li>
      </ul>
    </li>
  );
}
