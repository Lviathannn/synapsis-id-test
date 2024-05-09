import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Pen, X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/services/updateUser";
import { toast } from "sonner";

type Props = {
  userId: number;
  userName: string;
  userEmail: string;
  userGender: Gender;
  userStatus: Status;
};

export default function EditButton({
  userId,
  userName,
  userEmail,
  userGender,
  userStatus,
}: Props) {
  const [name, setName] = useState<string>(userName);
  const [email, setEmail] = useState<string>(userEmail);
  const [gender, setGender] = useState<Gender>(userGender);
  const [status, setStatus] = useState<Status>(userStatus);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: CreateUser) => updateUser(userId, data),
    onSuccess: () => {
      toast.success("User updated successfully.");
    },
    onError: () => {
      toast.error("Failed to update user.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      setIsOpen(false);
      setLoading(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      gender,
      status,
    };

    mutation.mutate(data);
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          variant="default"
          size="icon"
          className="rounded-[7px]"
        >
          <Pen size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Button
          size="icon"
          className="absolute right-5 top-5 hover:bg-destructive hover:text-destructive-foreground"
          variant="ghost"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </Button>
        <form className="w-full" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
            <DialogDescription>
              Dont use your real data, this is just a demo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="">
                Name :
              </Label>
              <Input
                required
                id="name"
                className="col-span-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="">
                Email :
              </Label>
              <Input
                required
                id="email"
                className="col-span-4"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="">
                Gender :
              </Label>
              <Select
                defaultValue={gender}
                onValueChange={(value: Gender) => setGender(value)}
              >
                <SelectTrigger className="w-full col-span-4">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="">
                Status :
              </Label>
              <Select
                defaultValue={status}
                onValueChange={(value: Status) => setStatus(value)}
              >
                <SelectTrigger className="w-full col-span-4">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              Create User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
