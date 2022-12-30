import { useState, useRef } from "react";
import { FileUploader } from "react-drag-drop-files";
import './App.css';

const fileTypes = ["JPEG", "PNG", "xlsx"];
function App() {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const fileUpl = useRef(null);

  const handleChange = async (files) => {
    const firstFile = files[0]; //ben sadece 1 file için örnek yaptım birden fazşa dosya varsa ona göre ayarlanır
    setFile(firstFile);
    setFileType(firstFile.type)
    fileUpl.name = "Dosya Yüklendi";
    debugger;
  };

  const handleButtonClick = async () => {
    const data = new FormData();
    data.append(fileType, file, file.name);

  };
  return (
    <div className="App">
      <div>
        <h1>Sürükle Bırak</h1>
        <FileUploader
          ref={fileUpl}
          label="Yüklemek için Bir Dosya Seçin"
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <p>{file ? `Dosya Adı: ${file.name}` : "Henüz Bir Dosya Yüklenmedi"}</p>
      </div>
      <button onClick={handleButtonClick}>Dosyayı Kaydet</button>
    </div>
  );
}

export default App;
