import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { IUser } from "@/types/user";

const initialUser: IUser = {
  name: "",
  age: 0,
  gender: "male",
};

interface AddUserFormProps {
  addUser: (user: IUser) => void;
}

function AddUserForm({ addUser }: AddUserFormProps) {
  const [values, setValues] = useState(initialUser);

  const handleChange = (value: string, key: keyof IUser) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addUser(values);
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-2">
      <div>
        <p className="text-center text-xl font-bold">Create new user</p>
      </div>

      <Label htmlFor="">Name</Label>
      <Input
        placeholder="John Doe"
        value={values.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        required
      />
      <Label>Age</Label>
      <Input
        placeholder="age"
        type="number"
        min={0}
        value={values.age}
        onChange={(e) => handleChange(e.target.value, "age")}
        required
      />
      <Label>Gender</Label>
      <RadioGroup
        defaultValue={values.gender}
        className="flex"
        required
        onValueChange={(e) => handleChange(e, "gender")}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="male" id="a" />
          <Label htmlFor="a">Male</Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="female" id="b" />
          <Label htmlFor="b">Female</Label>
        </div>
      </RadioGroup>
      <Separator />
      <fieldset className="grid grid-cols-2 gap-2">
        <Button variant="outline"> Cancel</Button>
        <Button> Create</Button>
      </fieldset>
    </form>
  );
}

export default AddUserForm;
