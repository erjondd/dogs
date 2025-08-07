import {useState, useEffect} from "react";
import {searchDogs} from "../../data/dogsWP";
import styles from "./index.module.scss";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";

export default function Search({open, onClose}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const fetchResults = async () => {
      const dogs = await searchDogs(query);
      setResults(dogs);
    };
    fetchResults();
  }, [query]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "#000",
          maxWidth: "900px",
        },
      }}>
      <div className={styles.searchContainer}>
        <div className={styles.closeButtonWrapper}>
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon style={{color: "white"}} />
          </IconButton>
        </div>

        <TextField
          label="Search dogs..."
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          fullWidth
          className={styles.searchInput}
        />

        <ul className={styles.resultsList}>
          {results.map((dog) => (
            <li key={dog.id} className={styles.resultItem}>
              <Link to={`/dog/${dog.id}`} onClick={onClose}>
                {dog.title?.rendered}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Dialog>
  );
}
