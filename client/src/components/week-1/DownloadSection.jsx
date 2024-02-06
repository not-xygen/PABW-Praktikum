export function DownloadSection() {
  const mockAPI = [
    {
      fullname: "Dhaffa Agus",
      email: "11201020@student.itk.ac.id",
      password: "Pswrd123",
      profile_picture:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      fullname: "Istaqom Wirawan",
      email: "11201020@student.itk.ac.id",
      password: "Pswrd123",
      profile_picture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const generateTextFile = () => {
    const content = mockAPI
      .map(
        (user) =>
          `Fullname: ${user.fullname}\nEmail: ${user.email}\nPassword: ${user.password}\nProfile Picture: ${user.profile_picture}\n\n`,
      )
      .join("");

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "userData.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <section>
      <h1 className="font-medium text-xl">Download</h1>
      <div className="flex gap-4">
        <a href="/example.jpg" download>
          <button type="button" className="border py-2 px-4 mr-4">
            Download Local Image
          </button>
        </a>

        <a
          href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiNk5fKnpeEAxWBe2wGHdbIDhIQFnoECA8QAQ&url=https%3A%2F%2Fwww.w3.org%2FWAI%2FER%2Ftests%2Fxhtml%2Ftestfiles%2Fresources%2Fpdf%2Fdummy.pdf&usg=AOvVaw1yfXcABf-Bej4cjTs8tPJn&opi=89978449"
          download>
          <button type="button" className="border py-2 px-4">
            Download Internet File
          </button>
        </a>
        <div>
          <button
            type="button"
            className="border py-2 px-4 mr-4"
            onClick={generateTextFile}>
            Download MockAPI as Text File
          </button>
        </div>
      </div>
    </section>
  );
}
