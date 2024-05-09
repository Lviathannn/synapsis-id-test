import QueryProvider from "@/components/provider/QueryProvider";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return <QueryProvider>{children}</QueryProvider>;
}
