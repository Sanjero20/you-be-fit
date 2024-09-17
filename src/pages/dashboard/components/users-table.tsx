import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser } from "@/types/user";
import { Trash, Edit } from "lucide-react";

interface UsersTableProps {
  users: IUser[];
  openModal: (user: IUser) => void;
}

function UsersTable({ users, openModal }: UsersTableProps) {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead className="w-36">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.length > 0 &&
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.age}</TableCell>

              {/* Actions Column */}
              <TableCell className="flex gap-2">
                <Button
                  variant="outline"
                  className="hover:bg-destructive hover:text-white"
                >
                  <Trash />
                </Button>

                <Button
                  variant="outline"
                  className="hover:bg-primary hover:text-white"
                  onClick={() => openModal(user)}
                >
                  <Edit />
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default UsersTable;
