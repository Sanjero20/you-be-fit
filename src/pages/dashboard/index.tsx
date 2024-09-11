import { FormEvent, useState } from "react";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface User {
  name: string;
  age: number;
  gender: "male" | "female";
}

const initialUser: User = {
  name: "",
  age: 0,
  gender: "male",
};

function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [value, setValue] = useState<User>(initialUser);

  const handleChange = (value: string | number, key: keyof User) => {
    setValue((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUsers((prevState) => [...prevState, value]);
    setValue(initialUser);
  };

  return (
    <div className="">
      {/*  */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[500px] flex-col gap-2"
      >
        <Label htmlFor="">
          Name
          <Input
            placeholder="John Doe"
            value={value.name}
            onChange={(e) => handleChange(e.target.value, "name")}
            required
          />
        </Label>

        <Label>
          Age
          <Input
            placeholder="age"
            type="number"
            min={0}
            value={value.age}
            onChange={(e) => handleChange(e.target.value, "age")}
            required
          />
        </Label>

        <RadioGroup
          defaultValue={value.gender}
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

        {/*  */}
        <Button>Add</Button>
      </form>

      {users.length > 0 && (
        <section>
          {users.map((user, index) => (
            <div key={index}>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.gender}</div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default DashboardPage;
