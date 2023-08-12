import styles from "./CryptoDropdown.module.css";

export default function CryptoDropdown({ options, onChange }) {
  return (
    <div className={styles.dropdownContainer}>
      <select
        className={styles.dropdown}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
