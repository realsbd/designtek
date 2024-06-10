"use client";

import PageLayout from "@/app/components/Layout/PageLayout";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    return (
        <PageLayout>
            <div className="px-3">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[250px]" />
                <div className="mb-5">
                    <Skeleton className="h-[480px] w-[986px]" />
                    <Skeleton className="h-8 w-[250px]" />
                </div>
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-16 w-[250px]" />

            </div>
            <ScrollToTopButton />
        </PageLayout>
    );
}
