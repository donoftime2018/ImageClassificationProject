import "./ImageUpload.css";
import { useNavigate, useParams } from "@solidjs/router";
import { createSignal, onMount, onCleanup, Show } from "solid-js";
import axios from "axios";

export default function ImageUpload() {
  const navigate = useNavigate();
  const { category } = useParams();

  const [file, setFile] = createSignal(null);
  const [preview, setPreview] = createSignal("");

  onMount(() => { document.title = "Image Upload"; document.body.style.background = "white"; });
  onCleanup(() => { document.title = ""; document.body.style.background = ""; });

  function onDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith("image/")) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  }

  function onPick(e) {
    const f = e.currentTarget.files?.[0];
    if (f && f.type.startsWith("image/")) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  }

  function goToResults() {
    if (!file()) return alert("Please select an image first.");

    console.log(file())
    let data = new FormData()
    data.append("image", file())
    data.append('universe', category)
    axios.post("http://localhost:5000/predict", data).then((response) => {
      if (response.status === 200)
      {
        console.log(response.data);
        navigate("/results", { state: { category, result: response.data } });
      }
    }).catch((error) => {
      alert("Error during classification");
    })

    // navigate("/results", { state: { category, preview: preview() } });
  }

  function goToHomePage() {
    navigate("/");
  }

  return (
    <div className="uploadContainer">
      <div className="text-3xl font-[poppins]">
        <p className="font-extrabold">Upload an Image</p>
      </div>

      <div
        className="font-[inter] mt-10 w-196 bg-white rounded-lg shadow-xl/50 p-8 text-center border border-slate-300"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <p className="mt-2">
          <span className="font-bold">Drag &amp; drop</span> an image here <br />or
        </p>
        <p className="mt-4">Click “Browse Files” to upload</p>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onPick}
        />
        <label
          for="fileInput"
          class="!bg-[#E53935] inline-block mt-5 py-2 px-4 text-white rounded cursor-pointer"
        >
          Browse Files
        </label>

        <Show when={preview()}>
          <div className="mt-6">
            <img src={preview()} alt="preview" className="mx-auto max-h-64 rounded" />
          </div>
        </Show>
      </div>

      <div className="mt-7 flex flex-row space-x-8 font-[inter]">
        <button
          onClick={goToResults}
          type="button"
          class="!bg-[#2B6DE0] mt-5 py-2 px-4 text-white rounded"
        >
          Classify Image
        </button>
        <button
          onClick={goToHomePage}
          type="button"
          class="!bg-[#D9D9D9] mt-5 py-2 px-4 text-black rounded"
        >
          <span className="font-bold">Back</span>
        </button>
      </div>
    </div>
  );
}
