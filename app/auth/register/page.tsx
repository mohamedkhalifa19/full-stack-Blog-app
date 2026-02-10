import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function page() {
  return (
    <form className="font-inter rounded-md  h-auto p-2 flex flex-col items-center bg-[#2e2e30] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-white font-bold text-xl">Create an account</h1>
      <p className="text-center max-w-95 text-gray-500">
        Join our community of writers and start sharing your stories
      </p>
      <Field>
        <FieldLabel className="capitalize text-white " htmlFor="fullname">
          full name
        </FieldLabel>
        <Input className="text-white" id="fullname" />
      </Field>
    </form>
  );
}

export default page;
