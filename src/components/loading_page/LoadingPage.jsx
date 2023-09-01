import { Puff } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Puff
        height="150"
        width="150"
        radius={1}
        color="white"
        ariaLabel="puff-loading"
        visible={true}
      />
    </div>
  );
}
