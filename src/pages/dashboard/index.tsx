import { useState } from "react";
//
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Modal from "@/components/common/modal";
//
import useModal from "@/hooks/useModal";
import { IUser } from "@/types/user";
import AddUserForm from "./components/add-user-form";

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

      <Separator />
      {/*  */}
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

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <AddUserForm addUser={handleAddUser} />
      </Modal>
    </div>
  );
}

export default DashboardPage;
