"use client";
import { Button } from "@/components/ui/button";
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
import { createUser } from "@/services/createUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  page: string;
};

type Limit = "5" | "10" | "20";
export default function CreateUserSection({ page }: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<Gender>("male");
  const [status, setStatus] = useState<Status>("active");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<string>("10");
  const router = useRouter();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: CreateUser) => createUser(data),
    onSuccess: () => {
      toast.success("User created successfully.");
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Failed to create user.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      setEmail("");
      setName("");
      setGender("male");
      setStatus("active");
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

  const handleLimitChange = (value: Limit) => {
    setLimit(value);
    router.push(`/users?page=${page}&limit=${value}`);
  };

  return (
    <section>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-semibold">List User</h1>
        <div className="flex gap-3">
          <Select defaultValue={limit} onValueChange={handleLimitChange}>
            <SelectTrigger className="w-full col-span-4">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
          <Dialog open={isOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setIsOpen(true)}>Create User</Button>
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
        </div>
      </div>
    </section>
  );
}
