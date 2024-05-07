"use client";

import { Modal, Input, Button } from "@/components/ui";
import { useState, Dispatch, SetStateAction } from "react";
import { PEOPLE } from "@/app/api/database";

export default function EditProfileModal({
  isOpen,
  closeModal,
  user,
  setName,
}: {
  isOpen: boolean;
  closeModal: () => void;
  user: Person;
  setName: Dispatch<SetStateAction<string>>;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
  }>({ name: user.name });

  function updatePerson(name: string) {
    const toSet = { name };
    setFormData(toSet);
  }

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!user.id) return;
    setSubmitting(true);

    const _person = await PEOPLE.update(user.id, formData);

    setSubmitting(false);
    if (_person) {
      user.name = formData.name;
      setName(formData.name);
      closeModal();
    }
  }

  const submitDisabled = formData.name === user.name;

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="edit profile">
      <form onSubmit={submitForm}>
        <Input
          label="name"
          value={formData.name}
          onChange={(e) => updatePerson(e.target.value)}
          name="name"
          className="mb-4 mt-2"
        />
        <div className="pt-6 mt-6 border-t-4 border-main">
          <Button
            text="submit"
            disabled={submitDisabled}
            outline={submitDisabled}
            loading={submitting}
          />
        </div>
      </form>
    </Modal>
  );
}
