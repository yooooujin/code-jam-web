import { Heading } from "@/features/ui/typography";
import { Button } from "@/features/ui/inputs";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-background">
      <a href="/">
        <Heading level={4} color="primary" className="font-extrabold">
          CODE JAM
        </Heading>
      </a>
      <Button type="button">로그인</Button>
    </header>
  );
};

export default Header;
