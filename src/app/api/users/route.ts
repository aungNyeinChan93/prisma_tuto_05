import prisma from "@/db/prisma-db";
import { NextRequest, NextResponse } from "next/server";

// export const runtime = 'edge'

// retrive users
export async function GET(request: NextRequest) {
    const skip = request.nextUrl.searchParams.get('skip') as string | undefined
    const name = request.nextUrl.searchParams.get('name') as string | undefined
    const users = await prisma.user.findMany({
        where: {
            name: {
                contains: name || ''
            }
        },
        orderBy: {
            created_at: "desc"
        },
        select: {
            id: true,
            name: true
        },
        take: 10,
        skip: Number(skip) || 0
    })
    return NextResponse.json({ users }, { status: 200 })
}

// update user name
export async function PUT(request: NextRequest) {
    try {
        const serachParams = request.nextUrl.searchParams;
        const email = serachParams.get('email') as string | undefined;

        const updateUser = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                name: 'update name'
            },
        })
        return NextResponse.json({ updateUser }, { status: 201 })
    } catch (error) {
        if (error instanceof Error) {
            console.error(error?.message)
        }
        return NextResponse.json({ error }, { status: 500 })
    }
}



export async function DELETE(request: NextRequest) {
    try {
        const email = request.nextUrl.searchParams.get('email') as string | undefined;
        await prisma.user.delete({
            where: { email }
        });
        return new NextResponse(null, { status: 204 })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error }, { status: 500 })
        }
    }
}