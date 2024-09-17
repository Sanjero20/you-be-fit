/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
//
import { Button } from "@/components/ui/button";
import UsersTable from "./components/users-table";
import AddUserForm from "./components/user-form";
import Modal from "@/components/common/modal";
//
import useModal from "@/hooks/useModal";
import { IUser } from "@/types/user";
import { UserService } from "@/services/users.service";

function DashboardPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isModalOpen, openModal, closeModal] = useModal();
  const userService = new UserService();

  const handleAddUser = (user: IUser) => {
    userService.createUser(user);
    setUsers((prev) => [...prev, user]);
    closeModal();
  };

  useEffect(() => {
    const users = userService.readUser();
    setUsers(users);
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between py-1">
        <p className="text-xl font-bold">Users List</p>
        <Button onClick={openModal}>Add User</Button>
      </div>

      <UsersTable users={users} />

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <AddUserForm handleSubmit={handleAddUser} />
      </Modal>
    </div>
  );
}

export default DashboardPage;
