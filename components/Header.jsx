import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from "next/link";
export default function BasicButtonGroup() {
  return (
    <ButtonGroup
      fullWidth
      variant="text"
      justify-content=""
      aria-label="Basic button group"
    >
      <Button>
        <Link href={"/users"}>Users</Link>
      </Button>
      <Button>
        {" "}
        <Link href={"/posts"}>posts</Link>
      </Button>
      <Button>
        {" "}
        <Link href={"/recipes"}>recipes</Link>
      </Button>
      <Button>admin</Button>
    </ButtonGroup>
  );
}
