/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
//
import { Button } from "@/components/ui/button";
import UsersTable from "./components/users-table";
import UserForm from "./components/user-form";
import Modal from "@/components/common/modal";
//
import useModal from "@/hooks/useModal";
import { IUser } from "@/types/user";
import { UserService } from "@/services/users.service";

function DashboardPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [formType, setFormType] = useState("");
  const [isModalOpen, openModal, closeModal] = useModal();
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const userService = new UserService();

  const handleAddUser = (user: IUser) => {
    const newUser = userService.createUser(user);
    setUsers((prev) => [...prev, newUser]);
    closeModal();
  };

  const handleUpdateUser = (user: IUser) => {
    const updatedUsers = userService.updateUser(user);
    setUsers(updatedUsers);
    closeModal();
    setSelectedUser(null);
  };

  const openCreateModal = () => {
    openModal();
    setFormType("CREATE");
  };

  const openUpdateModal = (user: IUser) => {
    openModal();
    setFormType("UPDATE");
    setSelectedUser(user);
  };

  useEffect(() => {
    const users = userService.readUser();
    setUsers(users);
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between py-1">
        <p className="text-xl font-bold">Users List</p>
        <Button onClick={openCreateModal}>Add User</Button>
      </div>

      <UsersTable users={users} openModal={openUpdateModal} />

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {formType == "CREATE" && <UserForm handleSubmit={handleAddUser} />}
        {formType == "UPDATE" && selectedUser && (
          <UserForm handleSubmit={handleUpdateUser} user={selectedUser} />
        )}
      </Modal>
    </div>
  );
}

export default DashboardPage;
