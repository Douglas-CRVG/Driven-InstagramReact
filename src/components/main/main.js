import Aside from "../aside/aside";
import Timeline from "../timeline/timeline";
export default function Main() {
  return (
    <main>
      <Timeline />
      <Aside image="Spike.jpg" username="Spike" name="Evan Daniels" />
    </main>
  );
}
