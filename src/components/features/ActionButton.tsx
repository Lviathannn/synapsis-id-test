"use client";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

type Props = {
  userId: number;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
};

export default function ActionButton({
  userId,
  name,
  email,
  gender,
  status,
}: Props) {
  return (
    <div className="flex gap-2">
      <EditButton
        userId={userId}
        userName={name}
        userEmail={email}
        userGender={gender}
        userStatus={status}
      />
      <DeleteButton userId={userId} />
    </div>
  );
}
