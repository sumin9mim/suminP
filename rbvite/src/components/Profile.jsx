import Button from "./atoms/Button";

export default function Profile({ name, signOut }) {
  return (
    <>
      <strong className="text-green-500">{name} logined</strong>
      <Button onClick={signOut} text="Sign out" size="xs" />
    </>
  );
}
