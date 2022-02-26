import "./search-box-styles.css";

//functional component
export const SearchBox = ({ placeHolder, onSearchChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={onSearchChange}
    />
);
