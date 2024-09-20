import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children: any;
    className?: string;
}

export default function DefaultCard({ children, className }: Props) {
    return (
        <div className={cn('border-border border hover:shadow-sm rounded-xl p-default bg-card text-card-foreground', className)}>
            {children}
        </div>
    )
}