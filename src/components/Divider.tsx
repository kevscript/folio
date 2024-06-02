import { Container } from "./Container";

export function Divider() {
  return (
    <Container>
      <div className="mw-full h-[1px] bg-gradient-to-r from-white/0 via-white/35 to-white/0 my-16"></div>
    </Container>
  );
}
