import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { memo, useMemo } from "react";

interface PaginationTabProps {
    handleSetPage: (page: number) => void;
    page: number;
    totalPages: number;
}

const PaginationTab = memo(({ handleSetPage, page, totalPages }: PaginationTabProps) => {
    const pageNumbers = useMemo(() => {
        const pages: (number | "...")[] = [];

        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);
        if (page > 3) pages.push("...");

        const start = Math.max(2, page - 1);
        const end = Math.min(totalPages - 1, page + 1);
        for (let i = start; i <= end; i++) pages.push(i);

        if (page < totalPages - 2) pages.push("...");
        pages.push(totalPages);

        return pages;
    }, [page, totalPages]);

    return (
        <Pagination className="mt-6 fixed bottom-0 left-0 mb-5 bg-background ">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => handleSetPage(page - 1)}
                        className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                </PaginationItem>

                {pageNumbers.map((item, i) =>
                    item === "..." ? (
                        <PaginationItem key={`ellipsis-${i}`}>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={item}>
                            <PaginationLink
                                isActive={page === item}
                                onClick={() => handleSetPage(item)}
                                className="cursor-pointer"
                            >
                                {item}
                            </PaginationLink>
                        </PaginationItem>
                    )
                )}

                <PaginationItem>
                    <PaginationNext
                        onClick={() => handleSetPage(page + 1)}
                        className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
});

export default PaginationTab;