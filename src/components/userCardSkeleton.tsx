import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserCardSkeleton = () => {
    return (
        <Card className="p-3 sm:p-4">
            <CardHeader className="flex items-center gap-3 p-0">
                <Skeleton className="w-10 h-10 md:w-12 md:h-12 rounded-full" />

                <div className="space-y-2 w-full">
                    <Skeleton className="h-4 w-32 md:w-40" />
                    <Skeleton className="h-3 w-24 md:w-32" />
                </div>
            </CardHeader>

            <CardContent className="mt-3 space-y-2 p-0">
                <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded" />
                    <Skeleton className="h-3 w-32" />
                </div>

                <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded" />
                    <Skeleton className="h-3 w-40" />
                </div>

                <div className="space-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                </div>
            </CardContent>
        </Card>
    );
};

export default UserCardSkeleton;