import { useState } from "react";
//
import { Button } from "@/components/ui/button";
import UsersTable from "./components/users-table";
import AddUserForm from "./components/add-user-form";
import Modal from "@/components/common/modal";
//
import useModal from "@/hooks/useModal";
import { IUser } from "@/types/user";

function DashboardPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isModalOpen, openModal, closeModal] = useModal();

  const handleAddUser = (user: IUser) => {
    setUsers((prev) => [...prev, user]);
    closeModal();
  };

  return (
    <div className="">
      <div className="flex items-center justify-between py-1">
        <p className="text-xl font-bold">Users List</p>
        <Button onClick={openModal}>Add User</Button>
      </div>

      <UsersTable users={users} />

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <AddUserForm addUser={handleAddUser} />
      </Modal>
    </div>
  );
}

export default DashboardPage;
