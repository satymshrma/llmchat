FROM oven/bun:alpine AS bun

# We create a user and a group to run our application as. This is a security best
# practice to avoid running applications as root. The user and group are created
# with the same name. This is a common practice in Linux and does not affect the
# behavior of the application.
RUN addgroup app && adduser -S -G app frontend
USER frontend

WORKDIR /frontend
COPY ./frontend/package*.json ./ 
COPY ./frontend/*.config.*s ./
# It turns out the frontend address is needed as compose.yaml is outside of the frontend directory. Thats where the docker file seems to be going?

# Change ownership of all files in the working directory to the "frontend" user from "app" group.
# This is necessary because the "bun" user is running the build process and its UID/GID
# are different from the "frontend" user. By changing the ownership, we ensure that the
# files in the working directory are owned by the "frontend" user and group, which is the
# user that will run the application in the final image. They say its nice for security.
USER root
RUN chown -R frontend:app .
USER frontend

RUN bun install

COPY . .

EXPOSE 5173:5173

CMD bun run dev