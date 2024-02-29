import arrowLeft from "../assets/arrow-left.png";
import helpQuery from "../assets/help-ans.png";
import sad from "../assets/sad.png";
import upset from "../assets/upset.png";
import happy from "../assets/happy.png";
import open from "../assets/open.png";
import { Link } from "react-router-dom";

const ChangeEmail = () => {
  const reactions = [sad, upset, happy];
  const answers = [
    "Go to your dashboard and click your profile icon at the top right corner.",
    "​Click on Account Settings.",
    "Click on the pen icon button to type the new email address and click Save to update it.",
    "The new email address will receive an email to confirm it. Click on Confirm new email address button to confirm it. Alternatively, copy and paste the link/URL included in the email.",
  ];
  return (
    <div>
      <div className=" flex items-center gap-3 mb-8">
        <img src={arrowLeft} alt="" />
        <p className="text-base text-indigo-600 font-bold">
          How to change the email address of your account?{" "}
        </p>
      </div>
      <div>
        <p className="text-base font-normal mb-4">
          This article will show you how to change your account's email address.
        </p>
        <div className="flex flex-col gap-4 pb-8 border-b">
          {answers.map((data, index) => (
            <div key={index}>
              <p className="text-base font-normal mb-4">
                {index + 1}. {data}
              </p>
              <img src={helpQuery} alt="" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center mt-6">
          <p className="text-slate-500">Did this answer this question?</p>
          <div className="flex justify-center items-center gap-4">
            {reactions.map((data, index) => (
              <img key={index} src={data} alt="" />
            ))}
          </div>
          <Link
            className="flex gap-2 items-center font-medium text-base text-indigo-600"
            to="/"
          >
            Open in help center <img src={open} alt="" />
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ChangeEmail;
