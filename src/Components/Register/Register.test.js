import { cleanup, render,screen } from "@testing-library/react";
import { ReactTestRenderer } from "react-test-renderer";
import RegisterComponent from "./RegisterComponent";

afterEach(() => { cleanup(); }
);

test("should render Register Component", ()=>{
    render(<RegisterComponent/>);
    const registerElement = screen.getByTestId("username");
    expect(registerElement).toBeInTheDocument();
})