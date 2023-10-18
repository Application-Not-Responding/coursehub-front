import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import {ReactNode} from "react";

interface DropdownOptionsProps {
  buttonContent: ReactNode;
  buttonVariant: 'flat' | 'bordered';
  variants: string[];
}

export default function DropdownOptions(props: DropdownOptionsProps) {
  const {buttonContent, variants, buttonVariant} = props;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant={buttonVariant}>{buttonContent}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        {variants.map((variant, index) => (
          <DropdownItem key={index}>{variant}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
