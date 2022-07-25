#base image
ARG NODE_VER=18

FROM node:${NODE_VER}

# Building the Image
# Create /app and cd into it
WORKDIR /app

# Copy app into /app
ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public
ADD views views

# Install the dependencies
RUN npm ci


# Running the Image
# Set any environment variables required by the application
ENV PORT=5000
ENV INSTANCE_NAME=""
ENV INSTANCE_HASH=""

#HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
	#CMD curl http://localhost:${APP_PORT}/healthz || exit 1

EXPOSE ${PORT}

# working
#ENTRYPOINT ["tail", "-f", "/dev/null"]
ENTRYPOINT [ "node", "main.js" ]








