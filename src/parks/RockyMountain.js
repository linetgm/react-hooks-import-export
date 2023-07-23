const trees = "Aspen and Pine";

function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

function elevation() {
  console.log("9583 ft");
}

function RockyMountain() {
  return (
    <div>
      <h2>Rocky Mountain National Park</h2>
      <p>Trees: {trees}</p>
      <p>Wildlife: {wildlife()}</p>
      <p>Elevation: {elevation()}</p>
    </div>
  );
}

export default RockyMountain;