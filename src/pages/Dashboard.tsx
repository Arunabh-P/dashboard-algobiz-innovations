import { useCallback, useMemo, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Input } from "@/components/ui/input";
import type { User } from "@/types/user";
import UserCardSkeleton from "@/components/userCardSkeleton";
import UserCard from "@/components/userCard";
import UserViewModal from "@/components/userViewModal";
import PaginationTab from "@/components/pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "@/components/ui/button";

const LIMIT = 10;

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [open, setOpen] = useState(false);

    const debouncedSearch = useDebounce(search, 500, () => setPage(1));

    const { data, isLoading, isFetching, error, isError, refetch } = useUsers(page, debouncedSearch);

    const totalPages = useMemo(
        () => (data?.total ? Math.ceil(data.total / LIMIT) : 1),
        [data?.total]
    );

    const handleViewDetails = useCallback((user: User) => {
        setSelectedUser(user);
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setSelectedUser(null);
        setOpen(false);
    }, []);

    if (isLoading) {
        return (
            <div className="px-4 md:px-20 py-4 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: LIMIT }).map((_, i) => (
                        <UserCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4">
                <h2 className="text-xl font-semibold text-destructive">Failed to load users</h2>
                <p className="text-muted-foreground text-sm max-w-sm">
                    {error?.message ?? "An unexpected error occurred."}
                </p>
                <Button
                    onClick={() => refetch()}
                >
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-20 py-4 md:py-12">
            <div className="md:flex justify-end items-center">
                <Input
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-4 md:w-lg"
                />
            </div>

            <div className={isFetching ? "opacity-50 pointer-events-none transition-opacity" : "pb-10"}>
                {data?.users.length === 0 ? (
                    <div className="text-center py-6 text-muted-foreground">
                        No users found
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data?.users.map((user: User) => (
                            <UserCard key={user.id} user={user} handleViewDetails={handleViewDetails} />
                        ))}
                    </div>
                )}
            </div>

            <PaginationTab handleSetPage={setPage} page={page} totalPages={totalPages} />

            {selectedUser && (
                <UserViewModal user={selectedUser} open={open} handleClose={handleClose} />
            )}
        </div>
    );
};

export default Dashboard;