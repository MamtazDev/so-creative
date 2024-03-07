import FromLabel from "./FromLabel";

const AboutProject = () => {
  return (
    <div>
      <div className="border rounded-xl p-6">
        <div className="flex justify-between items-start gap-6 ">
          <div>
            <p className="text-slate-500 text-sm font-normal mb-1">
              Project Title
            </p>

            <input
              className="w-full text-lg font-semibold mb-4"
              type="text"
              Value="SoCreative"
            />
            <p className="text-slate-500 text-sm font-normal mb-1">
              Video Type
            </p>

            <input
              className="w-full text-lg font-semibold"
              type="text"
              Value="Social Media Video"
            />
          </div>
          <button className="py-1.5 px-4 border border-indigo-600 rounded-full text-indigo-600 hover:bg-indigo-50 transition-all duration-300 ease-in">
            Change
          </button>
        </div>
      </div>
      <div className="border rounded-xl p-6 mb-6">
        <FromLabel
          title="Tell us more about your project"
          subtitle="The more information you provide us, the easier it makes it to deliver a video"
        />
        <textarea
          className="brief_input mb-5"
          cols="30"
          rows="5"
          placeholder="Type Here..."
        ></textarea>
        <button className="py-3 px-6 bg-indigo-600 rounded-full text-white text-base font-semibold ">
          Continue
        </button>
      </div>
    </div>
  );
};

export default AboutProject;
