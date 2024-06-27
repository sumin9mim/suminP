import Input from "./atoms/Input";

export default function Login() {
  return (
    <div className="border border-red-300 p-5">
      <h2 className="text-center text-3xl font-semibold leading-7 text-green-500">
        Sign In
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Input />
        </div>
      </div>
    </div>
  );
}
