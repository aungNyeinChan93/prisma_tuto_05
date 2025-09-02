-- DropForeignKey
ALTER TABLE "public"."quotes" DROP CONSTRAINT "quotes_author_id_fkey";

-- AddForeignKey
ALTER TABLE "public"."quotes" ADD CONSTRAINT "quotes_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
