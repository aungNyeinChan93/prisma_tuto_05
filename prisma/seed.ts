import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();


const main = async () => {
    await prisma.user.createMany({
        data: [
            { name: 'susu', email: 'susu@123', password: '123123123' },
            { name: 'koko', email: 'koko@123', password: '123123123' },
            { name: 'momo', email: 'momo@123', password: '123123123' },
        ]
    })
};


main().then(async () => {
    console.log(`seeding . . .`)
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect();
    process.exit(1)
})