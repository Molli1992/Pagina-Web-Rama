import React from "react";
import { Box } from '@chakra-ui/react';




function Footer() {

    return (

        <Box backgroundColor="white">

            <div class="container">

                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

                    <div class="col-md-4 d-flex align-items-center">
                        <a href="#" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <ion-icon name="logo-github" size="large"></ion-icon>
                        </a>
                        <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

                        <li class="ms-3"><a class="text-muted" href="#">
                            <ion-icon name="logo-facebook" size="large"></ion-icon>
                        </a>
                        </li>

                        <li class="ms-3"><a class="text-muted" href="#">
                            <ion-icon name="logo-google" size="large"></ion-icon>
                        </a></li>

                        <li class="ms-3"><a class="text-muted" href="#">
                            <ion-icon name="logo-whatsapp" size="large"></ion-icon>
                        </a></li>

                    </ul>

                </footer>

            </div>

        </Box>

    );

};

export default Footer;