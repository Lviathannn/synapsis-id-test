"use client";
import ActionButton from "@/components/features/ActionButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUsers } from "@/services/getUsers";
import { useQuery } from "@tanstack/react-query";
type Props = {
  page: string;
  limit: string;
};

export default function TableSection({ page, limit }: Props) {
  const { data: users } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page, limit),
  });

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="">Gender</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="">{user.gender}</TableCell>
              <TableCell className="">{user.status}</TableCell>
              <TableCell className="">
                <ActionButton
                  userId={user.id}
                  email={user.email}
                  name={user.name}
                  gender={user.gender}
                  status={user.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
