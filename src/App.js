import { useState, useRef } from "react";
import { FileUploader } from "react-drag-drop-files";
import './App.css';

const fileTypes = ["JPEG", "PNG", "xlsx"];
function App() {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const fileUpl = useRef(null);

  const handleChange = async (files) => {
    const firstFile = files; //ben sadece 1 file için örnek yaptım birden fazşa dosya varsa array geliyor files[0] şeklinde index vererk kullanılır
    setFile(firstFile);
    setFileType(firstFile.type)
    fileUpl.name = "Dosya Yüklendi";
    debugger;
  };

  const handleButtonClick = async () => {
    const data = new FormData();
    data.append(fileType, file, file.name);

     // Burası kaydetme apisi çağırılacağı zaman açılacak
    // const response = await fetch("Dosyayı bir yere kaydedecek apiurl", {
    //   method: "POST",
    //   body: data
    // });
    // const result = response.json();  //dönen stringfy edilmiş şekildeki sonuç verisini json'a cast ettim

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
