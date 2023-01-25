import { redirect } from "react-router-dom";

const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  //send post out

  if (submission.message.length < 10) {
    return { error: "message must be over 10 chars long" };
  }
  console.log(submission);

  //redirect the user
  return redirect("/");
};

export default contactAction;
