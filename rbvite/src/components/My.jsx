import Login from "./Login";
import Profile from "./Profile";
import Button from "./atoms/Button";
import SampleAtoms from "./atoms/SampleAtoms";

export default function My({ session: { loginUser, cart }, signOut }) {
  return (
    <>
      {loginUser ? (
        <Profile name={loginUser?.name} signOut={signOut} />
      ) : (
        <Login />
      )}
      <div className="mt-5 border">
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}
              <small className="p-3 pl-2 pr-2 text-gray-300 ml-2">
                ({item.price.toLocaleString()}원)
              </small>
            </li>
          ))}
        </ul>
        <Button text="상품추가" />
        <Button
          text="상품수정"
          type="primary"
          size="sx"
          className="mx-5 font-semibold"
        />
        <Button text="상품삭제" size="sm" type="danger" />
      </div>
      <SampleAtoms />
    </>
  );
}
